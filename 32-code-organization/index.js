//const apiUrl = 'http://localhost:3000/icecreams'
const headers = {'Content-Type':'application/json'}

function parseJsonResponse(response) {
  return response.json()
}

function index() {
  fetch(apiUrl)
    .then(parseJsonResponse)
    .then(console.log)
}

function show(resourceId) {
  fetch(`${apiUrl}/${resourceId}`)
    .then(parseJsonResponse)
    .then(console.log)
}

function create(body) {
  const config = {
    method:'POST',
    headers: headers,
    body:JSON.stringify(body)
  }

  fetch(apiUrl, config)
    .then(parseJsonResponse)
    .then(console.log)
}

function deleteResource(resourceId) {
  fetch(`${apiUrl}/${resourceId}`,{method:'DELETE'})
    .then(index)
}

const iceCreamAdapter = {
  apiUrl : 'http://localhost:3000/icecreams',
headers : { 'Content-Type': 'application/json' },


  parseJsonResponse:  function parseJsonResponse(response) {
      return response.json()
  },

  index: function index() {
    fetch(this.apiUrl)
      .then(parseJsonResponse)
      .then(console.log)
  },

  show: function show(resourceId) {
    fetch(`${apiUrl}/${resourceId}`)
      .then(parseJsonResponse)
      .then(console.log)
  },

  create: function create(body) {
    const config = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    }

    fetch(apiUrl, config)
      .then(parseJsonResponse)
      .then(console.log)
  },

  deleteResource: function deleteResource(resourceId) {
    fetch(`${apiUrl}/${resourceId}`, { method: 'DELETE' })
      .then(index)
  }
}

function generateAdapter(apiUrl) {

  return {
    headers: { 'Content-Type': 'application/json' },


    parseJsonResponse: function parseJsonResponse(response) {
      return response.json()
    },

    index: function index() {
      fetch(apiUrl)
        .then(parseJsonResponse)
        .then(console.log)
    },

    show: function show(resourceId) {
      fetch(`${apiUrl}/${resourceId}`)
        .then(parseJsonResponse)
        .then(console.log)
    },

    create: function create(body) {
      const config = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      }

      fetch(apiUrl, config)
        .then(parseJsonResponse)
        .then(console.log)
    },

    deleteResource: function deleteResource(resourceId) {
      fetch(`${apiUrl}/${resourceId}`, { method: 'DELETE' })
        .then(index)
    }
  }
}

const newIceCreamAdapter = generateAdapter('http://localhost:3000/icecreams')
const newGelatiAdapter = generateAdapter('http://localhost:3000/gelati')


class IcedAdapter {

  constructor(apiUrl) {
    this.apiUrl = apiUrl
  }

  parseJsonResponse(response) {
    return response.json()
  }

  index() {
    fetch(this.apiUrl)
      .then(parseJsonResponse)
      .then(console.log)
  }

  show(resourceId) {
    fetch(`${this.apiUrl}/${resourceId}`)
      .then(parseJsonResponse)
      .then(console.log)
  }

  create(body) {
    const config = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    }

    fetch(this.apiUrl, config)
      .then(parseJsonResponse)
      .then(console.log)
  }

  deleteResource(resourceId) {
    fetch(`${this.apiUrl}/${resourceId}`, { method: 'DELETE' })
      .then(index)
  }
}

const newIceCreamAdapterViaClasses = new IcedAdapter('http://localhost:3000/icecreams')
const newGelatiAdapterViaClasses = new IcedAdapter('http://localhost:3000/gelati')





const adapterFunctionality =  {
  headers: { 'Content-Type': 'application/json' },


  parseJsonResponse: function parseJsonResponse(response) {
    return response.json()
  },

  index: function index() {
    fetch(this.apiUrl)
      .then(parseJsonResponse)
      .then(console.log)
  },

  show: function show(resourceId) {
    fetch(`${this.apiUrl}/${resourceId}`)
      .then(parseJsonResponse)
      .then(console.log)
  },

  create: function create(body) {
    const config = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    }

    fetch(this.apiUrl, config)
      .then(parseJsonResponse)
      .then(console.log)
  },

  deleteResource: function deleteResource(resourceId) {
    fetch(`${this.apiUrl}/${resourceId}`, { method: 'DELETE' })
      .then(index)
  }
}

const newIceCreamAdapterViaOCreate = Object.create(adapterFunctionality)
newIceCreamAdapterViaOCreate.apiUrl = 'http://localhost:3000/icecreams'
const newGelatiAdapterOCreate = Object.create(adapterFunctionality)
newGelatiAdapterOCreate.apiUrl = 'http://localhost:3000/gelati'