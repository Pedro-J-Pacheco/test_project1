describe ('fecthdata',()=>{
    it ('should give us data in json', async()=>{
        const fetchData =jest.fn()
        //arange
        fetchData.mockResolvedValue({id:1,product:"A"});
        //Act
        const data = await fetchData();
        //Assert
        expect(data).toEqual({id:1,product:"A"})
        expect(fetchData).toHaveBeenCalled();
//test 121223424another number 2333
    });
});