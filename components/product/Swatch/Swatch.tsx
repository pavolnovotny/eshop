import {FC} from "react";
import {Check} from "@components/icons";
import {isDark} from "@lib/color";
import s from './Swatch.module.css'
import cn from 'classnames'

interface Props {
  color?: string
  label?: string
  variant?: string | 'color' | 'size'
  onClick: () => void
  active?: boolean
}

const Swatch: FC<Props> = ({
  color,
  label,
  variant,
  active,
  ...rest
  }) => {
  label = label.toLowerCase()
  variant = variant?.toLowerCase()

  const rootClassName = cn(
    s.root,
    {
      [s.active]: active,
      [s.color]: color,
      [s.size]: variant === 'size',
      [s.dark]: color && isDark(color)
    }
  )

  return (
    <button
      style={color ? {backgroundColor: color} : {}}
      className={rootClassName}
      {...rest}
    >
      {variant === 'color' && active &&
      <span>
         <Check/>
      </span>
      }
      {variant === 'size' ? label : null}
    </button>
  )
}

export default Swatch
