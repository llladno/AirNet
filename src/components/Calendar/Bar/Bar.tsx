const Bar = ({year, month} : {year: number, month: number}) => {
    return (
        <div>
            <h2>0{month} {year}</h2>
        </div>
    );
};

export default Bar;