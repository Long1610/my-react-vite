import React from 'react'
import { FormControl, InputLabel, OutlinedInput } from '@mui/material'
import { Controller } from 'react-hook-form'
import { convertToRem } from 'utils/convertToRem'
import { InputProps } from './input.type'
import styles from './input.module.scss'

const Input: React.FC<InputProps> = ({
  label,
  name,
  control,
  startAdornment,
  endAdornment,
  type,
  height = 46,
  width = '100%',
  customStyle = '',
  onKeyDown,
  placeholder,
  containerStyle = '',
  radius = 4,
  disabled
}) => {
  return (
    <FormControl
      variant="outlined"
      className={`${styles.form_control} ${containerStyle}`}
      sx={{
        width: convertToRem(width)
      }}
    >
      {!!label && (
        <InputLabel htmlFor={name} className={styles.input_label}>
          {label}
        </InputLabel>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <OutlinedInput
            disabled={disabled}
            id={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            startAdornment={startAdornment}
            endAdornment={endAdornment}
            inputProps={{
              autoComplete: 'off'
            }}
            className={`${styles.input_custom} ${customStyle}`}
            type={type}
            sx={{
              height: convertToRem(height),
              borderRadius: convertToRem(radius)
            }}
            onKeyDown={e => {
              if (onKeyDown) onKeyDown(e)
            }}
          />
        )}
      />
    </FormControl>
  )
}

export default Input
