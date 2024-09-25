function Button({text}: {text: string}) {
    return (
        <>
            <button className="rounded-full border border-transparent bg-blue-400 w-fit py-3 px-7 text-white font-bold hover:text-blue-400 hover:border-blue-400 hover:border hover:bg-white transition">
                {text}
            </button>
        </>
    )
}

export default Button;
