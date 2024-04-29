import {IProduct} from 'boundless-api-client';
import {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import ProductsList from '../components/ProductsList';
import MainLayout from '../layouts/Main';
import {apiClient} from '../lib/api';
import {makeAllMenus} from '../lib/menu';
// import VerticalMenu from '../components/VerticalMenu';
import {IMenuItem} from '../@types/components';
import SwiperSlider from '../components/SwiperSlider';
import mobileSlider1Img from '../assets/mobile-slider-1.png';
import mobileSlider2Img from '../assets/mobile-slider-2.png';
import p1 from '../assets/1.jpg';
import p2 from '../assets/2.jpg';
import p3 from '../assets/3.jpg';
import p4 from '../assets/4.jpg';
import p5 from '../assets/5.jpg';
import p6 from '../assets/6.jpg';
import p7 from '../assets/7.jpg';
import p8 from '../assets/8.jpg';
import p9 from '../assets/9.jpg';
import logo from '../assets/logo.png';
import lasile from '../assets/lasile.png';


// import CoverTextInCenter from '../components/CoverTextInCenter';
// import bgImg from '../assets/cover-bg.jpeg';
// import bgPortraitImg from '../assets/cover-bg-portrait.jpg';
import ProductsSliderByQuery from '../components/ProductsSliderByQuery';
import TextWithIcons from '../components/TextWithIcons';
import {faBug} from '@fortawesome/free-solid-svg-icons/faBug';
import {faFastForward} from '@fortawesome/free-solid-svg-icons/faFastForward';
import {faShieldAlt} from '@fortawesome/free-solid-svg-icons/faShieldAlt';
import {faSmile} from '@fortawesome/free-solid-svg-icons/faSmile';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Reviews from '../components/Reviews';
import {IBasicSettings} from '../@types/settings';

import reviewWoman1 from '../assets/review-woman-1.jpg';
import reviewMan1 from '../assets/review-man-1.jpg';
import reviewMan2 from '../assets/review-man-2.jpg';

export default function IndexPage({products, mainMenu, footerMenu, basicSettings}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu} basicSettings={basicSettings}>
			<div className='container-xxl'>
				<MainPageSlider />
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'>Descoperă</h1>
				<ProductsList
					products={products}
					className={'page-block'}
					itemClassName={'products__item_4-in-row'}
				/>
			</div>
			<TextWithIcons
				columns={[
					{
						icon:  <FontAwesomeIcon icon={faFastForward} className={'text-with-icons__icon'} />,
						title: 'Livrare gratuită',
						comment: 'Comenzile de peste 200 de ron beneficiază de livrare gratuită.Exclus tigări'
					},
					{
						icon:  <FontAwesomeIcon icon={faShieldAlt} className={'text-with-icons__icon'} />,
						title: 'Siguranță',
						comment: 'Pentru comenzile intre 0-199 ron se percepe taxa de transport in functie de distanță (intre 15-20 ron)'
					},
					{
						icon:  <FontAwesomeIcon icon={faSmile} className={'text-with-icons__icon'} />,
						title: 'Gamă variată de produse',
						comment: 'Livrarea produselor se face intre 8-24 ore de la primirea comenzii.Acceptam plata card/cash'
					},
				]}
				fullWidth={true}
				className={'page-block'}
			/>
			<div className='container-xxl'>
				<ProductsSliderByQuery
					query={{collection: ['main-page'], sort: 'in_collection'}}
					title={'Oferte Speciale:'}
					wrapperClassName='page-block'
				/>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<IIndexPageProps> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({menu: 'category'});
	const {products} = await apiClient.catalog.getProducts({collection: ['main-page'], sort: 'in_collection'});
	const basicSettings = await apiClient.system.fetchSettings(['system.locale', 'system.currency']) as IBasicSettings;

	const menus = makeAllMenus({categoryTree});

	return {
		props: {
			products,
			basicSettings,
			...menus
		}
	};
};

interface IIndexPageProps {
	products: IProduct[];
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
	basicSettings: IBasicSettings;
}

function 	MainPageSlider() {
	const slides = [
		{
			'img': lasile.src,
			'link': '',
			'captionPosition': 'bottom',
			'fillingColor': '#000000',
			'fillingOpacity': 0.40,
			'caption': '',
		},	{
			'img': p1.src,
			'link': '',
			'caption': '',
			'captionPosition': 'bottom',
			'fillingColor': '#000000',
			'fillingOpacity': 0.40,
		},
		{
			'img':p2.src,
			'link': '',
			'caption': '',
			'captionPosition': 'bottom',
			'fillingColor': '#000000',
			'fillingOpacity': 0.4,
		},
		{
			'img':p3.src,
			'link': '',
			'captionPosition': 'bottom',
			'fillingColor': '#000000',
			'fillingOpacity': 0.4,
			'caption': '',
		},
		{
			'img':p4.src,
			'link': '',
			'captionPosition': 'bottom',
			'fillingColor': '#000000',
			'fillingOpacity': 0.4,
			'caption': '',
		}	,	{
			'img':p5.src,
			'link': '',
			'captionPosition': 'bottom',
			'fillingColor': '#000000',
			'fillingOpacity': 0.4,
			'caption': '',

		},
		{
			'img':p6.src,
			'link': '',
			'captionPosition': 'bottom',
			'fillingColor': '#000000',
			'fillingOpacity': 0.4,
			'caption': '',

		},
		{
			'img':p7.src,
			'link': '',
			'captionPosition': 'bottom',
			'fillingColor': '#000000',
			'fillingOpacity': 0.4,
			caption: '',

		}	,
		{
			'img':p8.src,
			'link': '',
			'captionPosition': 'bottom',
			'fillingColor': '#000000',
			'fillingOpacity': 0.4,
			caption: '',

		},
		{
			'img':p9.src,
			'link': '',
			'captionPosition': 'bottom',
			'fillingColor': '#000000',
			'fillingOpacity': 0.4,
			caption: '',
		}
	];

	return (
		<SwiperSlider
			showPrevNext={true}
			size={'large'}
			slides={slides}
			className={'mb-4'}
		/>
	);
}