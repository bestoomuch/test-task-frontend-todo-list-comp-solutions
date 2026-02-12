/**
 * Базовый URL API.
 * В реальном проекте лучше вынести в .env.
 */
const BASE_URL = 'http://localhost:3001'

interface RequestOptions extends RequestInit {
	params?: Record<string, string>
}

/**
 * Универсальная обёртка над fetch.
 * - добавляет BASE_URL
 * - подставляет query-параметры
 * - выбрасывает ошибку при неуспешном HTTP-ответе
 */
export async function request<T>(
	endpoint: string,
	options: RequestOptions = {}
): Promise<T> {
	const { params, ...config } = options

	const url = new URL(BASE_URL + endpoint)

	if (params) {
		Object.entries(params).forEach(([key, value]) =>
			url.searchParams.append(key, value)
		)
	}

	const response = await fetch(url.toString(), {
		headers: {
			'Content-Type': 'application/json',
		},
		...config,
	})

	// Централизованная обработка HTTP-ошибок
	if (!response.ok) {
		throw new Error(`HTTP error: ${response.status}`)
	}

	return response.json() as Promise<T>
}