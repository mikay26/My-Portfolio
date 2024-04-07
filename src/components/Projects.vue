<!-- Projects.vue -->
<template>
 <section class="container mx-auto py-8">
  <h1 class="text-3xl font-bold mb-6 text-center font-sans text-pink-400">My Projects</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
     <!-- Card 1 -->
     <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-red-600">
      <img class="w-full h-40 object-cover" src="/images/realchat.png" alt="Project Image">
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-2">Node Js</h2>
        <p class="text-black-900 mb-4">Description of Project 1.Node.js is a runtime environment that allows developers to run JavaScript on the server-side, enabling scalable and high-performance applications..</p>
        <button class="text-pink-400 text-lg font-semibold">View More</button>
      </div>
    </div>
    
     <!-- Card 2 -->
     <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-red-600">
      <img class="w-full h-40 object-cover" src="/images/meatshop.png" alt="Project Image">
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-2">Meatshop Inventory</h2>
        <p class="text-black-1000 mb-4">Description of Project 2. The meatshop inventory system is a digital tool used for efficiently tracking and managing the stock of meats in retail or wholesale businesses.</p>
        <button class="text-pink-400 text-lg font-semibold">View More</button>
      </div>
    </div>
    
    <!-- Card 3 -->
    <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-red-600">
      <img class="w-full h-40 object-cover" src="/images/capstone.jpg" alt="Project Image">
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-2">Capstone Project</h2>
        <p class="text-black-1000 mb-4">Description of Project 3. The capstone project is a comprehensive culmination of academic learning, typically undertaken at the end of a program, where students apply their acquired knowledge and skills to address a real-world problem or develop an innovative solution within their field of study.</p>
        <button class="text-pink-400 text-lg font-semibold">View More</button>
      </div>
    </div>

  </div>
</section>
</template>

<script>

</script>

<style scoped>

</style>
