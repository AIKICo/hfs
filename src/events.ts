// This file is part of HFS - Copyright 2021-2023, Massimo Melina <a@rejetto.com> - License https://www.gnu.org/licenses/gpl-3.0.txt

import EventEmitter from 'events'

// app-wide events
const ee = new EventEmitter().setMaxListeners(100)

export default ee