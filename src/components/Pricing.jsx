import {React} from 'react';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

const Pricing = () => {
  
  return (
    <div className='mt-28'>

        <div className='bg-[#1a1a1aff] w-[100vw] text-white p-20'>
            <div className=' flex flex-col justify-center items-center p-5'>
                <h1 className='font-bold text-5xl m-3'>We want your business to be <span className='block text-center'>profitable</span></h1>
                <h3 className='m-3 text-gray-500 text-xl'>Flexible and affordable pricing. Made for every growing business</h3>
                <p className='m-3'>15-day free trial | No credit card required | Cancel anytime</p>
            </div>

            <div className='flex flex-row justify-center items-center'>
              <div className='bg-black border-2 w-[25vw] flex flex-col justify-center items-center rounded-3xl p-6 border-white float-left'>
                <p className='p-2'>Monthly or Annually</p>
                <h1 className='p-2'>STANDARD</h1>
                <h1 className='p-2'>&#x20B9; 799 / &#x20B9; 649</h1>
                <p className='p-2'>month billed monthly / month billed annually</p>
                <button className='bg-[#e67627] rounded-full p-4'>START FREE TRIAL</button>
                <p className='p-2 mt-4'>* Local taxes(VAT,GST,etc.) will be charged in addition to the prices mentioned</p>
              </div>

              <div className='bg-white w-[60vw] text-black float-right rounded-lg flex flex-col p-2'>
                <h1 className='font-bold text-2xl'>Just some of what our customers get:</h1>
                <div className='grid grid-cols-2 place-content-center'>
                  <div>
                      <ul className='list-disc ml-16'>
                        <li className='py-1'>5 Users</li>
                        <li className='py-1'>1 Register</li>
                        <li className='py-1'>1 Branch</li>
                        <li className='py-1'>1 Warehouse</li>
                        <li className='py-1'>Mobile Store</li>
                        <li className='py-1'>Unlimited POS transactions</li>
                        <li className='py-1'>Inventory Mangement</li>
                        <li className='py-1'>Sales Management</li>
                        <li className='py-1'>Item Serial and Batch Tracking</li>
                      </ul>
                  </div>

                  <div>
                    <ul className='list-disc'>
                      <li className='py-1'>Purchase Management</li>
                      <li className='py-1'>Customer Management</li>
                      <li className='py-1'>Vendor Management</li>
                      <li className='py-1'>Reports and Dasboard</li>
                      <li className='py-1'>Shipping and SMS Support</li>
                      <li className='py-1'>Counter Billing Apps : Windows, iOS and Android</li>
                      <li className='py-1'>Offline Billing and Data-Sync</li>
                      <li className='py-1'>Multi-Language billing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
        

              

        <div className='bg-white flex flex-row justify-center items-center m-8 p-2'>

          <div className=' p-2'>
            <h1 className='font-bold text-3xl p-2 mb-5'>Here's a more in-depth look at <br />the features in Zakya</h1>
              <div>
                <h1 className='font-bold text-[#e67627] py-2'>BASICS</h1>
                <hr className='border-gray-400'/>
                <ul>
                  <li className='py-2'>Users</li>
                  <hr className='border-gray-400'/>
                  <li className='py-2'>Muli-lingual</li>
                  <hr className='border-gray-400'/>
                  <li className='py-2'>Registers</li>
                  <hr className='border-gray-400'/>
                  <li className='py-2'>Branches</li>
                  <hr className='border-gray-400'/>
                  <li className='py-2'>Warehouses</li>
                  <hr className='border-gray-400'/>
                </ul>
                <h1 className='font-bold text-[#e67627] py-2'>INVENTORY MANAGEMENT</h1>
                <hr className='border-gray-400'/>
                <ul>
                  <li className='py-2'>Items</li>
                  <hr className='border-gray-400'/>
                  <li className='py-2'>Item Groups (Variants)</li>
                  <hr className='border-gray-400'/>
                  <li className='py-2'>Composite Items (Kitting)</li>
                  <hr className='border-gray-400'/>
                  <li className='py-2'>Packages</li>
                  <hr className='border-gray-400'/>
                </ul>
                <h1 className='font-bold text-[#e67627] py-2'>ITEM TRACKING</h1>
                <hr className='border-gray-400'/>
                <ul>
                  <li className='py-2'>Serial number</li>
                  <hr className='border-gray-400'/>
                  <li className='py-2'>Batch number</li>
                </ul>
                </div>
            </div>

            <div className='bg-black rounded-lg text-white text-center w-[20vw] p-2'>
              <h1 className='p-1 font-bold'>STANDARD</h1>
              <p className='p-1 font-bold text-3xl'>&#x20B9; 649 <span className='p-1 block text-xs'>/monthly billed annually</span></p>
              <button className='bg-[#e67627] rounded-full p-2 m-1 hover:p-4'>START FREE TRIAL</button>
              <ul>
                <li className='py-2'>5</li>
                <li className='py-2'><DoneRoundedIcon/></li>
                <li className='py-2'>1</li>
                <li className='py-2'>1</li>
                <li className='py-2'>1</li>
              </ul>
              <h1 className='py-2 invisibility'>Hello</h1>
              <ul>
                <li className='py-2'><DoneRoundedIcon/></li>
                <li className='py-2'><DoneRoundedIcon/></li>
                <li className='py-2'><DoneRoundedIcon/></li>
                <li className='py-2'><DoneRoundedIcon/></li>
              </ul>
              <h1 className='py-2 invisibile'>Hi</h1>
              <ul>
                <li className='py-2'><DoneRoundedIcon/></li>
                <li className='py-2'><DoneRoundedIcon/></li>
              </ul>
            </div>
          </div>
    </div>
  )
}

export default Pricing;