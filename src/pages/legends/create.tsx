import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateLegend() {
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Heading size="lg" fontWeight="normal">Criar Lenda</Heading>
                    <Divider my="6" borderColor="gray.700" />
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%" >
                            <Input name="nome" label="Nome:" />
                            <Input name="pais" label="País:" />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%" >
                            <Input name="imagem" label="Foto:" />
                            <Input name="posicao" label="Posição:" />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%" >
                            <Input name="nome-titulo" label="Nome do Título:" />
                            <Input name="imagem-titulo" label="Imagem do Título:" />
                            <Input type="number" name="quantidade-titulo" label="Quantidade de Títulos:" />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/legends" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button colorScheme="yellow">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}