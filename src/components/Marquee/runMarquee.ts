// Faixas que andam sozinhas e podem ser arrastadas (dedo ou mouse).
// A volta é uma Web Animation de 0 a -50% (o conteúdo vem duplicado): arrastar só move o
// currentTime dela, então o loop continua sem emenda para qualquer lado.

export type MarqueeTrack = {
  el: HTMLElement
  // Segundos por volta
  duration: number
  // Anda para a direita
  reverse: boolean
}

// Depois de soltar, a velocidade se aproxima da velocidade normal: sobra 92% da diferença a cada 16ms
const EASE_BACK = 0.92
// Diferença (px/ms) abaixo da qual a faixa já está na velocidade normal
const SETTLED = 0.005
// Se o dedo parou antes de soltar, não há arremesso
const STALE_MS = 100

export function runMarquee(section: HTMLElement, tracks: MarqueeTrack[], reduceMotion: boolean) {
  // Mouse em cima: as faixas param, como antes
  let hovering = false

  const strips = tracks.map(({ el, duration, reverse }) => {
    const total = duration * 1000
    const animation = el.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }], {
      duration: total,
      iterations: Infinity,
      direction: reverse ? 'reverse' : 'normal',
    })

    // Conteúdo para a direita = tempo voltando (ou avançando, na faixa invertida)
    const sign = reverse ? 1 : -1
    // Milissegundos de animação por pixel: uma volta anda metade da faixa
    const msPerPx = () => total / (el.offsetWidth / 2)
    const time = () => (animation.currentTime as number | null) ?? 0
    const setTime = (t: number) => {
      animation.currentTime = ((t % total) + total) % total
    }
    // Velocidade do conteúdo quando anda sozinho, em px/ms (negativa = para a esquerda)
    const autoSpeed = (k: number) => (reduceMotion || hovering ? 0 : -sign / k)

    let drag: { id: number; x: number; t: number; k: number; lastX: number; lastT: number; v: number } | null = null
    let frame = 0

    const sync = () => {
      if (!reduceMotion && !hovering && !drag && !frame) animation.play()
      else animation.pause()
    }

    // Solta com velocidade v (px/ms) e vai suavemente até a velocidade normal
    const release = (v: number) => {
      if (reduceMotion) return sync()
      const k = msPerPx()
      let last = performance.now()
      const step = (now: number) => {
        // O primeiro quadro pode ter carimbo anterior ao performance.now() da soltura
        const dt = Math.max(0, now - last)
        last = now
        const target = autoSpeed(k)
        v = target + (v - target) * EASE_BACK ** (dt / 16)
        setTime(time() + sign * v * dt * k)
        if (Math.abs(v - target) > SETTLED) {
          frame = requestAnimationFrame(step)
        } else {
          frame = 0
          sync()
        }
      }
      frame = requestAnimationFrame(step)
    }

    const onDown = (event: PointerEvent) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return
      cancelAnimationFrame(frame)
      frame = 0
      drag = {
        id: event.pointerId,
        x: event.clientX,
        t: time(),
        k: msPerPx(),
        lastX: event.clientX,
        lastT: event.timeStamp,
        v: 0,
      }
      el.setPointerCapture(event.pointerId)
      section.dataset.dragging = ''
      sync()
    }

    const onMove = (event: PointerEvent) => {
      if (!drag || event.pointerId !== drag.id) return
      setTime(drag.t + sign * (event.clientX - drag.x) * drag.k)
      const dt = event.timeStamp - drag.lastT
      if (dt > 0) {
        drag.v = 0.8 * ((event.clientX - drag.lastX) / dt) + 0.2 * drag.v
        drag.lastX = event.clientX
        drag.lastT = event.timeStamp
      }
    }

    const onUp = (event: PointerEvent) => {
      if (!drag || event.pointerId !== drag.id) return
      const fresh = event.type === 'pointerup' && event.timeStamp - drag.lastT < STALE_MS
      const v = fresh ? drag.v : 0
      drag = null
      delete section.dataset.dragging
      release(v)
    }

    el.addEventListener('pointerdown', onDown)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerup', onUp)
    el.addEventListener('pointercancel', onUp)
    el.addEventListener('lostpointercapture', onUp)
    sync()

    return {
      sync,
      stop() {
        cancelAnimationFrame(frame)
        el.removeEventListener('pointerdown', onDown)
        el.removeEventListener('pointermove', onMove)
        el.removeEventListener('pointerup', onUp)
        el.removeEventListener('pointercancel', onUp)
        el.removeEventListener('lostpointercapture', onUp)
        animation.cancel()
      },
    }
  })

  const setHover = (event: PointerEvent, value: boolean) => {
    if (event.pointerType !== 'mouse') return
    hovering = value
    strips.forEach((strip) => strip.sync())
  }
  const onEnter = (event: PointerEvent) => setHover(event, true)
  const onLeave = (event: PointerEvent) => setHover(event, false)
  section.addEventListener('pointerenter', onEnter)
  section.addEventListener('pointerleave', onLeave)

  return () => {
    section.removeEventListener('pointerenter', onEnter)
    section.removeEventListener('pointerleave', onLeave)
    delete section.dataset.dragging
    strips.forEach((strip) => strip.stop())
  }
}
