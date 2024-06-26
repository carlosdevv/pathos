import { Icons } from '@/components/icons'

import type { NavItemProps } from './types'

export const appRoutes = {
  home: '/',
  signIn: '/auth/sign-in',
  signUp: '/auth/sign-up',
  signOut: '/api/auth/sign-out',
  magicLink: '/auth/magic-link',
  settings: '/settings',
  suitability: '/suitability',
  createSuitability: '/suitability/create',
  finishRegister: '/finish-register',

  admin: {
    home: '/admin',
    users: '/admin/users',
  },
}

export const headerItems: NavItemProps[] = []

export const menuItems: NavItemProps[] = [
  {
    name: 'Suitability',
    path: appRoutes.suitability,
  },
]

export const adminMenuItems: NavItemProps[] = [
  {
    icon: <Icons.home className="size-4 text-primary" />,
    name: 'Home',
    path: appRoutes.admin.home,
  },
  {
    icon: <Icons.users className="size-4 text-primary" />,
    name: 'Clientes',
    path: appRoutes.admin.users,
  },
]

export const suitabilityInitialText =
  'Prezado Cliente,\n\nDe acordo com o Código ANBIMA de Regulamentação e Melhores Práticas para Fundos de Investimento, as Diretrizes para Adequação do Produto, Serviço ou Operação ao Perfil do Investidor, ambos editados pela Associação Brasileira das Entidades dos Mercados Financeiro e de Capitais (“ANBIMA”), e a Instrução CVM nº 539, de 13 de novembro de 2013, editada pela Comissão de Valores Mobiliários (“CVM” e ICVM 539/13”, respectivamente), este questionário tem por objetivo fornecer elementos para que a KPC possa verificar se, entre outros fatores: (i) o produto, serviço ou operação oferecido é adequado aos objetivos de investimento do cliente; (ii) a situação financeira do cliente é compatível com o produto, serviço ou operação oferecido; e (iii) o cliente possui conhecimento necessário para compreender os riscos relacionados ao produto, serviço ou operação oferecido.\nDesse modo, a KPC elaborou o presente questionário com o intuito de não só respeitar a regulamentação vigente, mas também desenvolver material relevante para a definição da estratégia de alocação mais adequada ao portfólio do cliente, através da classificação e tolerância ao risco, entre outros critérios que serão verificados por meio deste questionário.\nAo responder as questões abaixo, considere a resposta mais próxima do perfil que se pretende adotar na gestão do seu portfólio, levando em conta que o resultado deste questionário será parte integrante da definição da estratégia de oferecimento de produtos pela KPC. Lembramos, por fim, que as respostas devem levar em conta seu patrimônio total e não apenas a parcela sob conselho da KPC.'
