import {faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function FooterContacts() {
	return (
		<>
			<h3 className='page-footer__header'>Contactează-ne:</h3>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<FontAwesomeIcon icon={faWhatsapp}/>
				</span>
				<a className='link' href='tel:+40787441440'>+40 (787) 441 440</a>
			</p>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<FontAwesomeIcon icon={faMapMarkerAlt}/>
				</span>
				<a className='link' href='#'>Str. Moinești, București 077042</a>
			</p>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<FontAwesomeIcon icon={faClock}/>
				</span>
				9:00am &mdash; 22:00pm
			</p>
		</>
	);
}