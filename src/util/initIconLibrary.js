import { library } from '@fortawesome/fontawesome-svg-core'
import { 
	faMugHot, faImage, 
	faBowlingBall, faTimesCircle,
	faWifi, faSnowflake,
	faSmoking, faTableTennis,
	faMusic, faHandshake,
	faDog
} from '@fortawesome/free-solid-svg-icons'

export default () => {
	library.add(
		faMugHot, faImage, faBowlingBall, faTimesCircle,
		faWifi, faSnowflake, faSmoking, faTableTennis,
		faMusic, faHandshake, faDog
	)
}
