import { useReveal } from '../hooks/useReveal'

const delayClasses = {
  0: '',
  50: 'delay-[50ms]',
  80: 'delay-[80ms]',
  100: 'delay-100',
  120: 'delay-[120ms]',
  150: 'delay-150',
  160: 'delay-[160ms]',
  200: 'delay-200',
  240: 'delay-[240ms]',
  250: 'delay-[250ms]',
  280: 'delay-[280ms]',
  300: 'delay-300',
  320: 'delay-[320ms]',
  350: 'delay-[350ms]',
  400: 'delay-400',
}

const variants = {
  fadeUp: {
    hidden: 'translate-y-7 opacity-0',
    visible: 'translate-y-0 opacity-100',
  },
  fadeIn: {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  fadeLeft: {
    hidden: '-translate-x-6 opacity-0',
    visible: 'translate-x-0 opacity-100',
  },
  fadeRight: {
    hidden: 'translate-x-6 opacity-0',
    visible: 'translate-x-0 opacity-100',
  },
  scaleIn: {
    hidden: 'scale-[0.97] opacity-0',
    visible: 'scale-100 opacity-100',
  },
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'fadeUp',
  as: Tag = 'div',
  threshold,
  once = true,
}) {
  const { ref, visible } = useReveal({ threshold, once })
  const motion = variants[variant] || variants.fadeUp

  return (
    <Tag
      ref={ref}
      className={`reveal-base transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none ${
        visible ? `${motion.visible} is-visible` : motion.hidden
      } ${delayClasses[delay] || ''} ${className}`}
      data-visible={visible ? 'true' : 'false'}
    >
      {children}
    </Tag>
  )
}
