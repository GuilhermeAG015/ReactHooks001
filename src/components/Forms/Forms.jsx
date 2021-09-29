import React from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'

function Forms() {
    return ( 
        <form>
            <TextField 
                label='Nome'
                id='nome'
                variant='outlined'
                margin='normal'
                fullWidth
            />
            
            <TextField 
                label='Sobrenome'
                id='sobrenome'
                variant='outlined'
                margin='normal'
                fullWidth
            />

            <TextField 
                label='CPF'
                id='cpf'
                variant='outlined'
                margin='normal'
                fullWidth
            />

            <FormControlLabel 
            label='Promoções'
            control={<Switch name='Promocoes' defaultChecked color='primary'/>}
            />

            <FormControlLabel 
            label='Novidades'
            control={<Switch name='novidades' defaultChecked color='primary'/>}
            />

            <Button variant='contained' color='primary'>Confirmar</Button>
        </form>
    );
}

export default Forms;