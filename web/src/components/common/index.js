/** @jsx jsx */
import {Heading, Flex, jsx} from 'theme-ui'

export const SectionHeading = ({text, ...props}) => (
  <Heading
    as='h4'
    sx={{
      width: `100%`,
      fontFamily: 'heading',
      fontSize: [4, 4, 5],
      textTransform: `capitalize`,
      // color: `#163D57`
      color: `rgba(116, 29, 68, 0.71)`,
      lineHeight: 'solid',
      borderBottom: `3px solid`,
      borderColor: `rgba(116, 29, 68, 0.71)`,
      pb: [3, 3, 4],
      textAlign: `left`
    }}
    {...props}
  >
    {text}
  </Heading>
)

const selector = `> *:not(:last-child)`

const alignments = {
  start: `flex-start`,
  end: `flex-end`,
  center: `center`,
  baseline: `baseline`,
  stretch: `stretch`
}

export const Stack = props => {
  const {space = 0, align = `stretch`, sx, ...rest} = props
  return (
    <Flex
      sx={{
        flexDirection: `column`,
        alignItems: alignments[align],
        [selector]: {
          mb: space
        },
        ...sx
      }}
      {...rest}
    />
  )
}
