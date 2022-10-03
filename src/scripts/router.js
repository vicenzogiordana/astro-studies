import * as Turbo from '@hotwired/turbo'

Turbo.start()

document.addEventListener('turbo:load', () => {
  document.addEventListener('turbo:before-render', onBeforeRender)
})

function onBeforeRender(event) {
  event.preventDefault()

  // No support for the Shared Element Transition API
  if (!document.createDocumentTransition) {
    return event.detail.resume()
  }

  if (location.pathname === '/') {
    handleHomeNavigation(event)
  } else if (location.pathname.startsWith('/album')) {
    handleAlbumNavigation(event)
  }

  document.removeEventListener('turbo:before-render', onBeforeRender)
}

async function handleHomeNavigation(event) {
  const transition = document.createDocumentTransition()
  let image

  await animateVynil()

  transition
    .start(async () => {
      await event.detail.resume()

      const fromPath =
        Turbo.navigator.lastVisit?.location.pathname ||
        Turbo.navigator.currentVisit.referrer.pathname

      image = addTransitionTag(fromPath)
    })
    .then(() => {
      image?.classList.remove('tag-album-cover')
    })
}

function handleAlbumNavigation(event) {
  const toPath = location.pathname
  const image = addTransitionTag(toPath)

  const transition = document.createDocumentTransition()
  transition.start(() => {
    image?.classList.remove('tag-album-cover')
    event.detail.resume()
  })
}

async function animateVynil() {
  const vynil = document.querySelector('.vynil-image')
  if (vynil) {
    vynil.classList.add('vynil-animation-out')
    await wait(300)
  }
}

function addTransitionTag(pathname) {
  const link = document.querySelector(`[href="${pathname}"]`)
  const image = link?.querySelector('.card-image')
  image?.classList.add('tag-album-cover')
  return image
}

export async function wait(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}
