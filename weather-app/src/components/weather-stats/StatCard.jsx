

export default function StatCard({label, value}) {
    return (
        <div className="flex flex-col items-center justify-center mt-10 px-8 gap-4">
            <span>{label}</span>
            <span>{value}</span>
        </div>
    )
}