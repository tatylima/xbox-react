import Menu from "components/Menu";
import { ReactComponent as Search } from "assets/icons/search.svg";
import * as S from "./style";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";

const Home = () => {
	return (
		<S.Home>
			<Menu active={RoutePath.HOME} navItems={navigationItems} />
			<S.HomeContent>
				<header>
					<S.HomeHeaderDetails>
						<div>
							<S.HomeHeaderDetailsLogo>Xbox Live</S.HomeHeaderDetailsLogo>
							<S.HomeHeaderDetailsDate>
								Aqui ficará a data
							</S.HomeHeaderDetailsDate>
						</div>
						<S.HomeHeaderDetailsSearch>
							<Search />
							<input type="text" placeholder="Procure pelo jogo" />
						</S.HomeHeaderDetailsSearch>
					</S.HomeHeaderDetails>
				</header>
				<div>
					<S.HomeProductTitle>
						<b>Jogos</b>
					</S.HomeProductTitle>
					<S.HomeProductList>
						<p>Lista de produtos aqui</p>
					</S.HomeProductList>
				</div>
			</S.HomeContent>
			<aside>
				<p>Detalhes dos pedidos aqui</p>
			</aside>
		</S.Home>
	);
};

export default Home;