import { Meta } from 'src/layout/Meta'
import 'twin.macro'
import { AppConfig } from 'src/utils/AppConfig'

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div tw="mt-[64px] bg-purple-600"></div>
    </>
  )
}
