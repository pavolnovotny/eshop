import React, {ReactNode, FC, HTMLAttributes, HTMLProps} from "react";


interface Props {
  children: ReactNode | ReactNode[]
  el?: React.ComponentType<HTMLAttributes<HTMLElement>>
}


const Container: FC<Props> = ({children, el: Component="div"}) => {

  return (
    <Component
      className="px-6 mx-auto max-w-8xl"
    >
      {children}
    </Component>
  )
}

export default Container;
