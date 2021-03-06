
const ReviewData = ({ reviews }) => {
    const { name, description } = reviews;
    return (
        <div>
            <div class="card p-8 mx-12 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>


    );
};

export default ReviewData;