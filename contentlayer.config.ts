import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'

export const AboutPage = defineDocumentType(() => ({
  name: 'AboutPage',
  filePathPattern: `**.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (page) => `/${page._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'data/markdown',
  documentTypes: [AboutPage],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
})
