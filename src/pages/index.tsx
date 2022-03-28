import { Button, Flex, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input';
import { FormEvent, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatório').min(8, 'No mínimo 8 letras contendo letras maiúsculas e minúscula e números')
})

export default function Home() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  const { errors } = formState;

  const { signIn } =  useContext(AuthContext)

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event: FormEvent) => {
    event.preventDefault();
    await new Promise(resolve => setTimeout(resolve, 2000));

    await signIn(values);
  }

  return (
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex as="form" 
          w="100%" 
          maxWidth={360} 
          bg="gray.800"
          p={8}
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing={4}>
            <Input
             type="email" 
             name="email" 
             label="E-mail:"
             error={errors.email}
             { ...register('email') }
            />
            <Input 
              type="password" 
              name="password" 
              label="Senha:"
              error={errors.password}
              { ...register('password') }
            />
          </Stack>
          <Button 
            type="submit" 
            mt="6" 
            colorScheme="yellow" 
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    )
}
