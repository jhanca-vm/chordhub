'use server'

import prisma from './_lib/prisma'

/** @param {string} query  */
export async function search(query) {
	const result = await prisma.song.findMany({
		where: { name: { contains: query } },
		select: { slug: true, name: true, artist: true },
		take: 3
	})

	return result
}
