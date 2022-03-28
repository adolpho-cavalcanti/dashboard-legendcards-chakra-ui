import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri';
import { GiSoccerKick, GiSoccerField } from 'react-icons/gi';
import NavSection from "./NavSection";
import NavLink from "./NavLink";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <NavSection title="Geral">
                    <NavLink iconNav={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                </NavSection>
                <NavSection title="Ações">
                    <NavLink iconNav={GiSoccerKick} href="/legends/create">Criar Lendas</NavLink>
                    <NavLink iconNav={GiSoccerField} href="/legends">Listar Lendas</NavLink>
                </NavSection>
            </Stack>
        </Box>
    )
}