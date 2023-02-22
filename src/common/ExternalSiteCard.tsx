import Image from 'next/image'
interface ExternalSiteCardProps {
    siteName: string;
    siteUrl: string;
    siteIcon: string;
    siteIconDescription?: string;
    children?: React.ReactNode;
    // ?つけるとなくてもエラー吐かない
}

const ExternalSiteCard = (props: ExternalSiteCardProps) => {
    return (<div key={props.siteName}>
        <h3>
            <a href={props.siteUrl}
                target="_blank"
                rel="noopener noreferrer">
                <Image
                    src={props.siteIcon}
                    alt="Next.js Logo"
                    width={30}
                    height={15}
                    priority
                />
                {props.siteName}
            </a>
        </h3>
    </div>
    );
};
export default ExternalSiteCard;