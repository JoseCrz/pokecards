import React from 'react'
import PropTypes from 'prop-types'
import { Container, Input, Button, Icon } from './styles'

export const InputSearch = React.memo(
  ({ value, onSubmit, onChange, placeholder }) => {
    return (
      <Container onSubmit={onSubmit}>
        <Input value={value} onChange={onChange} placeholder={placeholder} />
        <Button>
          <Icon />
        </Button>
      </Container>
    )
  }
)

InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
}
