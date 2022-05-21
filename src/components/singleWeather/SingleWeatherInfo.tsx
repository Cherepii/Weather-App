import { FC } from "react"

interface IProps {
  desc: string,
  extraDesc?: string,
  value: number | string
}

const SingleWeatherInfo: FC<IProps> = ({desc, extraDesc, value}) => {
  return (
    <h4>
      {desc}:{' '}
      <b>
        {value} {' '}
        {extraDesc}
      </b>
    </h4>
  )
}
export default SingleWeatherInfo