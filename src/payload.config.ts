// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { Attendees } from './collections/Attendees'
import { Events } from './collections/Events'
import { MarketingSectionsCollection } from './deprecated/Marketing-collection_old'
import { PartnersCollection } from './deprecated/partners_old'
import { Partners2Collection } from './collections/partners2'
import { Tickets } from './collections/tickets-collection'
import { Gallery7Collection } from './collections/gallery-7'
import { Testimonial25Collection } from './collections/TODOturnBlockIntoCollection-testimonial-25'
import { StatisticsCollection } from './collections/statistics'
import { FaqLeftRightCollection } from './collections/faq-left-right'
import { LecturersCollection } from './collections/lecturers'
import { AgendaCollection } from './collections/agenda'
import { getServerSideURL } from './utils/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  email: nodemailerAdapter({
    defaultFromAddress: process.env.NODE_ENV == 'production' ? 'office@scufflr.com' : 'team@scufflr.com',
    defaultFromName: process.env.NODE_ENV == 'production' ? 'Драгомир BBH' : 'Драго Тест BBH',
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  admin: {
    timezones: {
      defaultTimezone: 'Europe/Sofia',
    },
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  //Pages, Homepage, AboutPage, ConfPage, 
  collections: [Users, Media, Attendees, Events, MarketingSectionsCollection, PartnersCollection, Partners2Collection, Tickets, Gallery7Collection, Testimonial25Collection, StatisticsCollection, FaqLeftRightCollection, LecturersCollection, AgendaCollection],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  cors: [getServerSideURL()].filter(Boolean),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
