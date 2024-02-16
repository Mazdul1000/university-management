export const getBaseUrl = () => {
    return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3030/api/v1"
}