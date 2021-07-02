<template>
  <div class="max-w-2xl space-y-6 sm:px-6 lg:px-0 lg:col-span-9 rounded">
    <form action="#" method="POST">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="bg-white py-6 px-4 space-y-6 sm:p-6 border-t-4 border-indigo-600">
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">Application Requirements</h3>
            <p class="mt-1 text-sm text-gray-500">The list below are the things we would love to see in a quality
              application.</p>
          </div>

          <fieldset>
            <legend class="text-base font-medium text-gray-900">Write a well drafted email containing:</legend>
            <div class="mt-4 space-y-4">
              <div class="flex items-start">
                <div class="h-5 flex items-center">
                  <input id="comments" name="comments" type="checkbox"
                         class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                </div>
                <div class="ml-3 text-sm">
                  <label for="comments" class="font-medium text-gray-700">Your CV</label>
                  <p class="text-gray-500">Since we are looking for full stack devs we're hoping that you have at least
                    some measure of visual
                    creativity/flare. This is typically the first thing we notice when looking at CV's. The ones that
                    stand out are the ones that are well formatted, easy to read and follow, well summarized without
                    omitting important details and accurate.</p>
                </div>
              </div>
              <div>
                <div class="flex items-start">
                  <div class="h-5 flex items-center">
                    <input id="candidates" name="candidates" type="checkbox"
                           class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="candidates" class="font-medium text-gray-700">Portfolio of evidence</label>
                    <p class="text-gray-500">This can be absolutely anything that you have built, designed, developed or
                      participated in that would show us that you have some good chops. You can add links, references,
                      screenshots, github/bitbucket/dribble/ profiles etc. Heck, you could even attach a project with
                      a docker container and instructions on getting it up and running. As long as it's your own and
                      demonstrates your ability to design, create or write clean maintainable code.</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="flex items-start">
                  <div class="h-5 flex items-center">
                    <input id="offers" name="offers" type="checkbox"
                           class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="offers" class="font-medium text-gray-700">Letter of motivation</label>
                    <p class="text-gray-500">Take a few minutes to really think about the industry, the role, the stack
                      the people and the perks and then write a paragraph motivating why you would be the ideal
                      candidate for this position and how you would be able to take this company form good to great.</p>
                  </div>
                </div>
              </div>
            </div>
            <legend class="text-base font-medium text-gray-900 ml-6 mt-10">Send it to &rarr; info@sinov8.net</legend>
          </fieldset>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
export default {
  name: 'ApplicationSteps'
}
</script>
