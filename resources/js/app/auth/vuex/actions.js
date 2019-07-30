export const register = ( dispatch ,  {payload, context} ) => {
    context.ready = false
   return axios.post('/api/register', payload).then((response) => {
       
    context.ready = true
   }).catch((error) => {
       context.errors = error.response.data.errors
       context.ready = true
   })
    
}

export const shoutOut = () => { alert('ok') }