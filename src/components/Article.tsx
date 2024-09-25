import { articles } from "../data/DATA";
import ArticleItem from "./ArticleItem";
import Button from "./Button";

function Article() {
    return (
        <section className="flex h-fit flex-col gap-12 my-40 items-center max-w-screen-xl mx-auto">
            <div className="flex flex-col self-center max-w-xl items-center gap-3">
                <h1 className="text-3xl font-bold text-center">
                    Check out our latest article
                </h1>
                <img src="/devider.svg" className="max-w-20" />
            </div>
            <div className="flex lg:flex-row max-w-screen-xl gap-5 flex-col mx-5">
                {articles.map((item) => (
                    <ArticleItem key={item.title} {...item} />
                ))}
            </div>
            <Button text="Learn More" isReverse={true} />
        </section>
    );
}

export default Article;