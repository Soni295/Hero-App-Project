import { DefaultMessage } from '../components/DefaultMessage/DefaultMessage'

export const NotFoundPage = () => {
  const msg = "Sorry this page don't exist"

  return <DefaultMessage text={msg} />
}
