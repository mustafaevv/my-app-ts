import React from 'react'
import { useTranslation } from 'react-i18next'

type Props = {}

const About = (props: Props) => {
  const { t } = useTranslation()
  return (
    <div>{`${t('title')}`}</div>
  )
}

export default About