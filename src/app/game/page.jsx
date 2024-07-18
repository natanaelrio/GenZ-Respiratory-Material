import Game from '@/component/game'
import LayoutHeaderFooter from '@/component/layoutHeaderFooter'

export const metadata = {
    title: 'GAME ORGAN PERNAFASAN MANUSIA',
    description: 'GAME ORGAN PERNAFASAN MANUSIA',
}

export default function Page() {
    return (
        <LayoutHeaderFooter kondisi={false} bg={true}>
            <Game />
        </LayoutHeaderFooter>

    )
}
