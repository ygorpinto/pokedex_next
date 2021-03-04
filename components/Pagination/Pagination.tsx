import db from '../../db.json'

export const Pagination = ({nextPage,prevPage}) => {
    return (
        <div>
            {prevPage && <button onClick={prevPage}>
                {db.prevpage}
            </button>}
            {nextPage && <button onClick={nextPage}>
                {db.nextpage}
            </button>}
        </div>
    )
}