export const register = ( dispatch ,  {payload} ) => {
   return axios.post('/api/register', payload).then((response) => {
       console.log(response.data)
   })
    
}

export const shoutOut = () => { alert('ok') }