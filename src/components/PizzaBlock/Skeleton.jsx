import ContentLoader from "react-content-loader"

export const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="1" y="296" rx="10" ry="10" width="280" height="22" />
        <circle cx="134" cy="138" r="134" />
        <rect x="1" y="339" rx="8" ry="8" width="280" height="88" />
        <rect x="1" y="453" rx="9" ry="9" width="100" height="30" />
        <rect x="130" y="446" rx="14" ry="14" width="147" height="45" />
    </ContentLoader>
)

