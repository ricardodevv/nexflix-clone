/* @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import { useState } from 'react';
import Link from '@mui/material/Link';
import logo from '../src/pictures/logo.svg'
import Image from 'next/image'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {

	const [lang, setLang] = useState('English')

	const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
	  <div css={css`display: flex; align-items: center; justify-content: space-between`}>
		<div css={css`width: 200px; padding: 1rem; margin: 1rem 2rem;`}>			
			<Link href="/">
				<Image src={logo} objectFit="fill"/>
			</Link>
		</div>
		<Box sx={{ border: "1px solid", height: "fit-content", display: "flex", mr: 10}}>
		<Select
					value={lang}
					onChange={handleChange}
          inputProps={{ 'aria-label': 'language' }}
					sx={{p: "3px 5px", bgcolor: "black", color: "white", border: "1px solid white"}}
				>
          <MenuItem value="English">
            English
          </MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
        </Select>
			<Button sx={{ textTransform: "none", backgroundColor: "red", color: "white", fontSize: 15, ml: 3, p: "4px 18px"}}>
				Sign in
			</Button>
		</Box>
	  </div>
		
	)
}

export default Header