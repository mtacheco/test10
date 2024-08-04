<template>
    <div>
        <section id='latest'>
	        
	        <div class="container">
		        <div class='row thehead'>
					  <div class='col-md-8 text-left'>
					  	<h3>搜尋租盤</h3>
					  	<p class='lead'>100%終身免佣。自助配對。</p>
					  </div>
					  <div class='col-md-4 text-right'>
						<p><a href='#'>主頁</a> > <a href='#'>搜尋租盤</a></p>
					  </div>
		        </div>
		        <div class='row searchproperties'>
					  <div class='col-md-12 text-center'>
				
					  	<div class='row'>
						  	<div class='col-md-4 text-left' v-for="property in properties">
							  	<div class='outer'>
								  	<a :href='"/properties/" + property.id'>
									  	<div class='upper'>
											<img v-if='property.photos?.length > 0' :src='property.photos[0]'>
                                            <img v-else src='/assets/pictures/inner.png'>
											<div class='innertext'>
												<span>{{ property.status }}</span>
												<h4>HKD{{ property.rent }} / 每月</h4>
											</div>
									  	</div>
									  	<div class='lower'>
										  	<h3>{{ property.title }}</h3>
										  	<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg> {{ property.address }}</span>
								
									  	</div>
									  			  	
										<div class="listing-features">
											<div class="row">
											  	<div class="col-md-4">
												  	<strong>實用面積 </strong><br>{{ property.size }}呎
											  			
											  	</div>
											  	<div class="col-md-4">
												  	<strong>房間 </strong><br>{{ property.noofroom }}
											  			
											  	</div>
											  	<div class="col-md-4">
												  	<strong>廳  </strong><br>{{ property.nooflivingroom }}
											  			
											  	</div>
											</div>
										</div>
										
										<div class="lastdate">
											<div class="row">
											  	<div class="col-md-6">
												  	刊登日期:
											  			
											  	</div>
											  	<div class="col-md-4 text-right">
                                                    {{ formatDate(property.createdAt) }}
											  			
											  	</div>
											  	
											</div>
										</div>
								  	</a>
							  	</div>
						  	</div>
			
					
					  	</div><!-- end row -->

                      <br><br>
                      <div class="row text-center thepage">
						<nav aria-label="Page navigation example">
							<ul class="pagination">
							<li class="page-item" v-if="page > 1">
								<a :href="'/properties/pages/' + prevpage" class="page-link">
								<span>上一頁</span>
								</a>
							</li>
							
							<li class="display@sm pagination__item_wrapper page-link" 
								v-for="pageNumber in pageNumbers"
								:key="pageNumber">
								<a :href="'/properties/pages/' + pageNumber">{{ pageNumber }}</a>
							</li>
							
							<li class="page-item" v-if="page < totalPages">
								<a :href="'/properties/pages/' + nextpage" class="page-link">
								<span>下一頁</span>
								</a>
							</li>
							</ul>
						</nav>
					  </div>
					  	
					  	
					  
					  	
					  </div>

			    </div>
	        </div>
        
        </section>
    </div>
</template>

<script setup>

    const runtimeConfig = useRuntimeConfig();
    const route = useRoute();

    let page = route.params.page;

    const properties = ref([]);
    const { data }= await useFetch(runtimeConfig.public.apiBase + 'properties?page=' + page);
    
    if (data.value){
        properties.value = data.value.properties;
    }

        /* pagination */
  
        const totalPages = data.value.totalPages;

        let prevpage = parseInt(page) - 1;
        if (prevpage < 1 ) {
            prevpage = null;
        }
        let nextpage = parseInt(page) + 1;
        if (nextpage > totalPages ) {
            nextpage = null;
        }

        const pageNumbers = computed(() => {
        const numbers = [];
        for (let i = 1; i <= totalPages; i++) {
            numbers.push(i);
        }
        return numbers;
        });

        /* end pagination */




</script>