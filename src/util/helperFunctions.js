export const getIdListFromObj = (obj) => 
	typeof obj === 'object' &&
	Object.keys(obj).length > 0 ? 
		Object.keys(obj).map(key => obj[key]) : []
