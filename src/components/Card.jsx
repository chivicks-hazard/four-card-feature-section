const Card = ({children, borderColor}) => {
    return (
        <div className={`border-t-4 rounded-lg border-t-${borderColor} shadow-2xl w-72 p-6`}>
            <div className="flex flex-col h-full justify-between">
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Card