import React from 'react'
import read from '../../../../images/read.png';
import shadowbg from '../../../../images/shadowbg.jpg';
import './History.css';

function History() {
    return (
        <div className="d-flex justify-content-center shadow-sm p-3 mb-5 bg-white rounded ">
            <div  className="col-md-6 bg-design ">
                

                <h2 className='h2-title'>Read Hadith</h2>
                <div className='div-card shadow-lg p-3 mb-5 bg-white rounded'>
                    <h5 className='h5'>‘আলক্বামাহ ইব্‌নু ওয়াক্কাস আল-লায়সী (রহঃ) থেকে বর্ণিতঃ</h5>
                    <p className='p'>
                    আমি ‘উমর ইব্‌নুল খাত্তাব (রাঃ)-কে মিম্বারের উপর দাঁড়িয়ে বলতে শুনেছিঃ আমি আল্লাহর রসূল (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)-কে বলতে শুনেছিঃ কাজ (এর প্রাপ্য হবে) নিয়ত অনুযায়ী। আর মানুষ তার নিয়ত অনুযায়ী প্রতিফল পাবে। তাই যার হিজরত হবে ইহকাল লাভের অথবা কোন মহিলাকে বিবাহ করার উদ্দেশ্যে- তবে তার হিজরত সে উদ্দেশ্যেই হবে, যে জন্যে, সে হিজরত করেছে।
                    </p>
                    <small>[সহিহ বুখারী, হাদিস নং ১ হাদিসের মান: সহিহ হাদিস]</small>
                </div>
               
            </div>
                <div className="col-md-6">
                <img className='read' src={read} alt="" />
            </div>
        </div>
    )
}

export default History
