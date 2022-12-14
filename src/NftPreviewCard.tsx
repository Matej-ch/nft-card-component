import './NftPreviewCard.scss'
import iconClockSvg from './assets/icon-clock.svg'
import iconEthereumSvg from './assets/icon-ethereum.svg'
import avatarImg from './assets/image-avatar.png';
import equilibriumImg from './assets/image-equilibrium.jpg';
import iconViewSvg from './assets/icon-view.svg';

type NftCardProps = {
    title: string,
    description: string,
    price: number
}

function NftPreviewCard({title, description, price}: NftCardProps) {

    return (
        <div className="nft-card" role='main'>
            <div className={'image-container'}>
                <span className={'overlay'}></span>
                <img className={'eye-image'} src={iconViewSvg} alt=""/>
                <img className={'main-image'} src={equilibriumImg} alt="equilibrium image"/>
            </div>
            <h1>{title}</h1>
            <p>{description}</p>

            <div className={'price-date-container'}>
                <div className={'price'}>
                    <span><img src={iconEthereumSvg} alt=""/></span>{price} ETH
                </div>
                <div className={'date'}>
                    <span>
                        <img src={iconClockSvg} alt=""/>
                    </span>
                    3 days left
                </div>
            </div>

            <div className={'border'}></div>

            <div className={'name-container'}>
                <img src={avatarImg} alt="avatar" width="40" height="40"/>
                <div>
                    Creation of <span className={'name'}>Jules Wyvern</span>
                </div>
            </div>
        </div>
    )
}

export default NftPreviewCard
