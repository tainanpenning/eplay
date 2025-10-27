import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  $variant?: 'primary' | 'secondary'
}

export const Button = ({
  type,
  title,
  onClick,
  to,
  children,
  $variant = 'primary'
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        $variant={$variant}
        type={type}
        title={title}
        onClick={onClick}
      >
        {children}
      </S.ButtonContainer>
    )
  } else {
    return (
      <S.ButtonLink to={to as string} title={title}>
        {children}
      </S.ButtonLink>
    )
  }
}
