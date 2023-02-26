import { promisify } from 'node:util'
import { readdir, writeFile } from 'node:fs'
import { join as joinPath, relative } from 'node:path'
import { fileURLToPath } from 'url'

const asyncReaddir = promisify(readdir)
const writeFileAsync = promisify(writeFile)

const lokiDir = fileURLToPath(new URL('../.loki', import.meta.url))
const actualDir = joinPath(lokiDir, 'current')
const expectedDir = joinPath(lokiDir, 'reference')
const diffDir = joinPath(lokiDir, 'difference')

;(async function main() {
    const diffs = await asyncReaddir(diffDir)

    await writeFileAsync(
        joinPath(lokiDir, 'report.json'),
        JSON.stringify({
            newItems: [],
            deletedItems: [],
            passedItems: [],
            failedItems: diffs,
            expectedItems: diffs,
            actualItems: diffs,
            diffItems: diffs,
            actualDir: relative(lokiDir, actualDir),
            expectedDir: relative(lokiDir, expectedDir),
            diffDir: relative(lokiDir, diffDir),
        })
    )
})()
