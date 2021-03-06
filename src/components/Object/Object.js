import './Object.css';

function ObjectFunc({ object }) {
    if (!object) {
        return null;
    }

    const groupImg = <svg className="object-icon" width="19" height="14" viewBox="0 0 19 14" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.24271 6.72954C10.8631 6.72954 12.1234 5.09977 12.1234 3.41265V2.88411C12.1234 1.19706 10.8631 8.78708e-08 9.24271 8.78708e-08C7.62226 8.78708e-08 6.36198 1.197 6.36198 2.88411V3.41265C6.36198 5.09977 7.62226 6.72954 9.24271 6.72954ZM3.4713 7.27518C3.93461 7.27518 5.20251 6.69223 5.20251 5.48266V4.58636C5.20251 3.37673 4.28788 2.79378 3.4713 2.79378C2.68182 2.79378 1.74014 3.37673 1.74014 4.58636V5.48266C1.74014 6.69223 3.03263 7.27518 3.4713 7.27518ZM13.844 9.51631C13.8431 9.50755 13.8404 9.49922 13.8395 9.49052C13.8259 9.38499 13.8052 9.28177 13.7763 9.18068C13.7763 9.17974 13.7763 9.17893 13.7754 9.17805C13.7149 8.96316 13.6129 8.75616 13.4604 8.55223V8.55135C13.2104 8.21572 12.8331 7.87339 12.2203 7.53958C11.8962 7.36312 11.7536 7.28225 11.5533 7.28225C11.2347 7.28225 10.9567 7.52249 10.4883 7.93955H10.4874L10.0614 8.31938C10.046 8.33346 9.58669 8.96273 9.24278 8.96273C8.89887 8.96273 8.43949 8.3334 8.42413 8.31938L7.99812 7.93955H7.99721C7.52886 7.52249 7.25085 7.28225 6.93225 7.28225C6.73189 7.28225 6.5531 7.36312 6.26528 7.53958C5.67106 7.90331 5.27507 8.21528 5.02604 8.55042L5.02507 8.55085C5.02417 8.55173 5.02417 8.55311 5.02333 8.55386C4.87255 8.7561 4.77147 8.96179 4.71105 9.17536C4.71021 9.17711 4.70918 9.1793 4.70847 9.18143C4.68039 9.28177 4.65961 9.38361 4.64612 9.48821C4.64521 9.49791 4.6425 9.50705 4.64154 9.51669C4.62888 9.62786 4.62172 9.74121 4.62172 9.85889C4.62172 9.87197 4.62146 12.3123 4.62172 12.3237C4.62172 13.1201 4.93129 13.444 5.77698 13.444H12.7087C13.5617 13.444 13.864 13.1376 13.864 12.3237C13.8642 12.3123 13.8639 9.87197 13.8639 9.85889C13.8638 9.74128 13.8566 9.62792 13.844 9.51631ZM15.0243 7.27518C15.4875 7.27518 16.7556 6.69223 16.7556 5.48266V4.58636C16.7556 3.37673 15.8409 2.79378 15.0243 2.79378C14.2347 2.79378 13.293 3.37673 13.293 4.58636V5.48266C13.293 6.69223 14.5855 7.27518 15.0243 7.27518ZM1.31458 8.48832C0.239549 9.08178 0.000401627 10.028 0.000401627 10.6433C0.000401627 10.6528 -0.000502033 11.7549 0.000401627 11.7636C0.000401627 12.5767 0.282021 12.884 1.15567 12.884H3.46626C3.46626 12.884 3.46626 10.5032 3.46626 9.52288L2.88863 8.96273C2.2775 8.44019 1.76228 8.24151 1.31458 8.48832ZM3.46626 9.52288C3.47898 9.53353 3.46626 9.25686 3.46626 9.52288V9.52288ZM18.4851 10.6433C18.4851 10.0279 18.2459 9.08172 17.1709 8.48832C16.7232 8.24151 16.208 8.44019 15.5969 8.96279L15.0192 9.52295C15.0192 10.5032 15.0192 12.884 15.0192 12.884H17.3298C18.2035 12.884 18.4851 12.5767 18.4851 11.7636C18.486 11.7549 18.4851 10.6529 18.4851 10.6433ZM15.0192 9.52288C15.0192 9.25686 15.0065 9.53353 15.0192 9.52288V9.52288Z" fill="#444444" />
    </svg>;

    const folderImg = <svg className="object-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <g clip-path="url(#clip0)">
            <path d="M14.3765 16.2931H0.485735C0.16608 16.2931 -0.0663685 15.9895 0.0171143 15.6807L3.17208 7.03112C3.22918 6.81947 3.42129 6.67236 3.6407 6.67236H17.5314C17.8511 6.67236 18 6.97774 18 7.28467L14.8451 15.9343C14.788 16.1459 14.5959 16.2931 14.3765 16.2931Z" fill="#EFCE4A" />
            <path d="M3.17166 7.03117C3.22877 6.81921 3.42087 6.67241 3.64028 6.67241H16.4479V4.5H2.79273L0.930664 6.36207V13.1751L3.17166 7.03117Z" fill="#F4EFDC" />
            <path d="M7.31514 3.25851L6.2069 1.70679H0.537517C0.240828 1.70679 0 1.9473 0 2.2443V15.5047C0.0214138 15.5053 0.0428276 15.5066 0.0636207 15.5078L0.931035 13.1427V6.36196L1.55172 5.74127V3.25851H7.31514Z" fill="#EBBA16" />
            <path d="M1.55176 3.25854V5.7413L2.79314 4.49992H15.8276V3.25854H1.55176Z" fill="#D1BF86" />
            <path d="M2.79273 6.36207V4.5L0.930664 6.36207H2.79273Z" fill="#CEC9AE" />
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="18" height="18" fill="white" />
            </clipPath>
        </defs>
    </svg>;

    return (
        <div className="window">
            <div className="top">Подробная информация о событии</div>
            <div className="info-box">
                <div className="line">
                    <div className="title">Объект:</div>
                    <div className="info" id="group">
                        {groupImg}
                        {object.group}
                        <a className="info">Открыть в новом окне</a>
                    </div>
                </div>
                <div className="line">
                    <div className="title">Изменивший права:</div>
                    <div className="info">{object.privilegeChanger}</div>
                </div>
                <div className="line">
                    <div className="title">Изменены права:</div>
                    <div className="info">{object.privelegeOwner}</div>
                </div>
                <div className="line">
                    <div className="title">На доступ к объекту:</div>
                    <div className="info">
                        {folderImg}
                        {object.object}
                        <a className="info">Открыть в новом окне</a>
                    </div>
                </div>
                <div className="line">
                    <div className="title">Права:</div>
                    <div className="info">{object.privileges.join('\n')}</div>
                </div>
            </div>
        </div>
    );
};

export default ObjectFunc;